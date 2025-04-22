if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').then(() => {
    console.log('SW registrado com sucesso');
  });
}

Notification.requestPermission().then(permission => {
  if (permission === 'granted') {
    new Notification('QRcodedasorte', {
      body: 'Já viu a nova mensagem de hoje?',
      icon: '/icon-192.png'
    });
  }
});