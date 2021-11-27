import { addObserver, destroyObserver } from '../../instrumented/utils'

describe('addObserver', () => {
  beforeEach(() => {
    cy.visit('./cypress/tests/utils.observer.html')
  })

  it('Removes the observer from the element state', () => {
    cy.get('[data-cy=paragraph]').then(([el]) => {
      const elementMap = new WeakMap()
      elementMap.set(el, {})

      const snipText = () => {}
      const state = { elementMap }

      addObserver(state, snipText, el)
      destroyObserver(state, el)

      expect(state.elementMap.get(el).observer).eq(undefined)
      expect(state.elementMap.get(el).observer).eq(undefined)
    })
  })
})