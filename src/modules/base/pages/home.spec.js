import { mount } from '@cypress/vue';
import Home from './home.vue';

it('renders a message', () => {
  mount(Home, {
    propsData: {
      name: 'john',
    },
  });

  cy.get('p').contains('john');
});
