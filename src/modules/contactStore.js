export function loadContacts() {
    return JSON.parse(localStorage.getItem('contactList') || '[]')
}

export function saveContacts(list) {
    localStorage.setItem('contactList', JSON.stringify(list))
}

export function getContactById(id) {
    const a = loadContacts().find(c => c.id == id)
    console.log('22', a, id)
    return loadContacts().find(c => c.id == id)
}
