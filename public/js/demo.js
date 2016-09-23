alert('dsfdsf');

function FlashMessage(type, messages) {
  this.type = type;
  this.messages = typeof messages === 'string' ? [messages] : messages;
}

FlashMessage.prototype = {
  get icon() {
    switch (this.type) {
      case 'info':
        return 'ui-icon-info';
      case 'error':
        return 'ui-icon-alert';
    }
  },

  get stateClass() {
    switch (this.type) {
      case 'info':
        return 'ui-state-highlight';
      case 'error':
        return 'ui-state-error';
    }
  },

  toHTML: function() {
    return '' +
           '' +
           '' + this.messages.join(', ') + '' +
           '' +
           '';
  }
};