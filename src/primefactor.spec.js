import primeFactors from "./primefactor.js";

describe("Prime factors", () => {
    it("generate factors of 1", () => {
      let primefactors=new primeFactors();
      expect(primefactors.generate(1)).toEqual([]);
    });
    
    it("generate factors of 2", () => {
      let primefactors=new primeFactors();
      expect(primefactors.generate(2)).toEqual([2]);
    });

    it("generate factors of 3", () => {
        let primefactors=new primeFactors();
        expect(primefactors.generate(3)).toEqual([3]);
      });
  });
