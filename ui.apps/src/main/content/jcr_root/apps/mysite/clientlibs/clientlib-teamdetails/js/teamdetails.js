document.querySelectorAll('[data-teamdetails-toggle]').forEach((button) => {
    if (button.dataset.teamdetailsInitialized) {
        return;
    }

    button.dataset.teamdetailsInitialized = 'true';
    button.addEventListener('click', () => {
        const role = button.closest('.cmp-teamdetails__card')?.querySelector('[data-teamdetails-role]');
        if (!role) {
            return;
        }

        const isExpanded = button.getAttribute('aria-expanded') === 'true';
        role.hidden = isExpanded;
        button.setAttribute('aria-expanded', String(!isExpanded));
        button.textContent = isExpanded ? 'Show role' : 'Hide role';
    });
});
