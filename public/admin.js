let contacts = [];
const API_URL = '/api/contacts';

// Elements
const contactsTableBody = document.getElementById('contactsTableBody');
const loading = document.getElementById('loading');
const contactModal = document.getElementById('contactModal');
const contactForm = document.getElementById('contactForm');
const modalTitle = document.getElementById('modalTitle');

// Form inputs
const idInput = document.getElementById('contactId');
const collegeInput = document.getElementById('college');
const phoneInput = document.getElementById('phone');
const whatsappInput = document.getElementById('whatsapp');
const emailInput = document.getElementById('email');
const orderInput = document.getElementById('orderIndex');

// Fetch and render contacts
async function fetchContacts() {
    try {
        loading.style.display = 'block';
        contactsTableBody.innerHTML = '';
        
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error('Fetch failed');
        contacts = await response.json();
        
        renderTable();
    } catch (err) {
        console.error(err);
        alert('Failed to load contacts. Ensure backend is running connected to MongoDB.');
    } finally {
        loading.style.display = 'none';
    }
}

function renderTable() {
    contactsTableBody.innerHTML = '';
    if (contacts.length === 0) {
        contactsTableBody.innerHTML = '<tr><td colspan="4" class="px-6 py-4 text-center text-gray-500">No contacts found</td></tr>';
        return;
    }

    contacts.forEach(contact => {
        const tr = document.createElement('tr');
        tr.className = 'hover:bg-gray-50';
        tr.innerHTML = `
            <td class="px-6 py-4">
                <div class="text-sm font-medium text-gray-900">${contact.college}</div>
            </td>
            <td class="px-6 py-4 text-sm text-gray-500 space-y-1">
                <div>📞 ${contact.phone}</div>
                <div>💬 ${contact.whatsapp}</div>
                <div>✉️ ${contact.email}</div>
            </td>
            <td class="px-6 py-4 text-sm text-gray-500">${contact.orderIndex || 0}</td>
            <td class="px-6 py-4 text-right text-sm font-medium">
                <button onclick="editContact('${contact._id}')" class="text-indigo-600 hover:text-indigo-900 mr-3">Edit</button>
                <button onclick="deleteContact('${contact._id}')" class="text-red-600 hover:text-red-900">Delete</button>
            </td>
        `;
        contactsTableBody.appendChild(tr);
    });
}

function openModal(contactId = null) {
    contactModal.classList.remove('hidden');
    if (contactId) {
        modalTitle.textContent = 'Edit Contact';
        const contact = contacts.find(c => c._id === contactId);
        if (contact) {
            idInput.value = contact._id;
            collegeInput.value = contact.college;
            phoneInput.value = contact.phone;
            whatsappInput.value = contact.whatsapp;
            emailInput.value = contact.email;
            orderInput.value = contact.orderIndex || 0;
        }
    } else {
        modalTitle.textContent = 'Add New Contact';
        contactForm.reset();
        idInput.value = '';
    }
}

function closeModal() {
    contactModal.classList.add('hidden');
    contactForm.reset();
}

async function saveContact(e) {
    e.preventDefault();
    const id = idInput.value;
    const isEdit = !!id;
    
    const data = {
        college: collegeInput.value,
        phone: phoneInput.value,
        whatsapp: whatsappInput.value,
        email: emailInput.value,
        orderIndex: parseInt(orderInput.value) || 0
    };

    try {
        const url = isEdit ? `${API_URL}/${id}` : API_URL;
        const method = isEdit ? 'PUT' : 'POST';
        
        const response = await fetch(url, {
            method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        if (!response.ok) throw new Error('Save failed');
        
        closeModal();
        fetchContacts();
    } catch (err) {
        console.error(err);
        alert('Failed to save contact');
    }
}

async function deleteContact(id) {
    if (!confirm('Are you sure you want to delete this contact?')) return;
    
    try {
        const response = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
        if (!response.ok) throw new Error('Delete failed');
        fetchContacts();
    } catch (err) {
        console.error(err);
        alert('Failed to delete contact');
    }
}

// Initial boot
fetchContacts();
