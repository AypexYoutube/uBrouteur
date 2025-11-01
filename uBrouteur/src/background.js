chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "scamDetected") {
    // Affiche une notification rouge personnalisée
    chrome.notifications.create({
      type: "basic",
      iconUrl: "icon128.png",
      title: "⚠️ Vous parlez à un brouteur",
      message: "Cette photo est fréquemment utilisée par les escrocs !",
      priority: 2
      // Note : L'API Chrome ne permet pas de changer la couleur directement,
      // privilégie une icône rouge et un titre avec émoticône
    });
  }
});
