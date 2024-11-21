import DialogueManager from './modules/dialogueManager.js';
import dialogueSequences from './modules/dialogueData.js';

// Initialize dialogue manager when document is ready
document.addEventListener('DOMContentLoaded', () => {
    const dialogueManager = new DialogueManager();
    
    // Get current page name from URL
    const pageName = window.location.pathname.split('/').pop().replace('.html', '');
    
    // Load initial dialogue for current page if it exists
    if (dialogueSequences[pageName]?.initial) {
        dialogueManager.loadDialogue(dialogueSequences[pageName].initial);
    }

    // Make the dialogue manager globally accessible
    window.dialogueManager = dialogueManager;

    // Make dialogueSequences globally accessible
    window.dialogueSequences = dialogueSequences;
});


