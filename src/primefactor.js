class primeFactors
  {
      generate(n)
      {
        let primes=[]
        if(n%2 === 0){
            primes.push(2);
            n = n / 2;
        }
        if(n > 1){
          primes.push(n);
        }
        return primes;
      }
  }
export default primeFactors;