setTimeout(function () {client.channels.get('541649827226714113').fetchMessages().then(messages => messages.map(message => console.log(message.content)))}, 3000);
