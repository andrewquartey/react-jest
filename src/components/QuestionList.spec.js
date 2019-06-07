describe('The question list', ()=>{
    beforeEach(()=>{
        console.log('Before Each')
    })  

    beforeAll(()=>{
        console.log('Before All ')
    })
    afterAll(()=>{
        console.log('After All ')
    })
    afterEach(()=>{
        console.log('After Each ')
    })

    it('Should display the list of questions', ()=>{
        expect(2+2).toEqual(4);
    })
    
    it.skip('Should be the meaning of life', ()=>{
        expect(2+2).toEqual(434);
    })
})