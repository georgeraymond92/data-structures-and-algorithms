'use strict';

const multi = require('../multi-bracket-validation');

describe('testing the multiBracketValidation test' , () => {
  it('should return true when passed a string where the brackets are balanced', () =>{
    expect(multi('this{test}should{pass}')).toEqual(true);
  });

  it('should return false when passed a string where the brackets are not balanced', () =>{
    expect(multi('this{test}should{not{pass}')).toEqual(false);
  });

  it('should return false if you give it brackets in the wrong order', () =>{
    expect(multi('][')).toEqual(false);
  });

  it('should return false', () =>{
    expect(multi('this{test}should{pass}}}()()')).toEqual(false);
  });

});