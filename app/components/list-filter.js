import Component from '@ember/component';

export default Component.extend({
  classNames: ['list-filter'],
  value: '',

  init() {
    this._super(...arguments);
    this.listFilterAction('').then((allResults) => {
      this.set('results', allResults.results);
    });
  },

  actions: {
    handleFilterEntry() {
      let filterInputValue = this.inputValue;
      let filterAction = this.listFilterAction;

      filterAction(filterInputValue).then((filterResults) => {
        if (filterResults.query === this.inputValue) {
          this.set('results', filterResults.results);
        }
      });
    }
  }

});