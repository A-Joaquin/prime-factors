describe("Prime factors", () => {
    it("generate factors of 1", () => {
      let primefactors=new primeFactors();
      expect(primefactors.generate(1)).toEqual([]);
    });
  
  });


  class primeFactors
  {
      generate(n)
      {
        return [];
      }
  }