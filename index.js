(() => {
})();

Hooks.on('preUpdateActor', (document, changed, options, userId) => {
    if (!game.user?.isGM)
        {
            return false;
        }
});

Hooks.on('preUpdateItem', (document, changed, options, userId) => {
    if (!game.user?.isGM && changed.type !== "spell")
        {
            return false;
        }
});

Hooks.on('preDeleteItem', (document, options, userId) => {
    if (!game.user?.isGM)
        {
            return false;
        }
});

Hooks.on('preCreateItem', (document, options, userId) => {
    if (!game.user?.isGM)
        {
            return false;
        }
});