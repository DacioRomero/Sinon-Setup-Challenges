const chai = require('chai');
const sinon = require('sinon');

chai.should();

// https://gist.github.com/zzarcon/dae3db4b470cb5140fb5#file-fibo_loop-j
function fibonacci(num){
    var a = 1, b = 0, temp;

    while (num > 0){
      temp = a;
      a = a + b;
      b = temp;
      num--;
    }

    return b;
  }

describe('Challenge Sinon Stub', () => {
    it('should pass', (done) => {
        const fibonacci = sinon.stub().returns(12);
        fibonacci(4).should.eql(12);
        fibonacci(4).should.not.eql(4);
        done();
    });
});
