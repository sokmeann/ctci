describe('1.1 isUnique', function(){

  const unique = 'sunday'
  const notUnique = 'hello'

  it('Should not contain any repeated characters (Approach 1)', function(){
    expect(isUnique_Obj(unique)).toEqual(true)
    expect(isUnique_Obj(notUnique)).toEqual(false)
  })

  it('Should not contain any repeated characters (Approach 2)', function(){
    expect(isUnique(unique)).toEqual(true)
    expect(isUnique(notUnique)).toEqual(false)
  })

})

describe('1.2 Check Permutations', function(){

  it('Should return false if strings are not same length', function(){
    expect(checkPerm('aab', 'baaa')).toEqual(false)
    expect(checkPerm('cat', 'caat')).toEqual(false)
  })

  it('Should return false if differing char composition', function(){
    expect(checkPerm('aab', 'aac')).toEqual(false)
    expect(checkPerm('cat', 'can')).toEqual(false)
  })

  it('Should return true if string 1 and 2 are permutations', function(){
    expect(checkPerm('aba', 'baa')).toEqual(true)
    expect(checkPerm('hello', 'olleh')).toEqual(true)
    expect(checkPerm('today', 'aydot')).toEqual(true)
  })

})

describe('1.3 URLify', function(){

  const string = 'Mr John Smith     '

  it('Should return a string with no spaces', function(){
    expect(urlify(string).indexOf(' ')).toEqual(-1)
    expect(typeof(urlify(string))).toEqual('string')
  })

  it('Should return a url with "%20" instead of spaces', function(){
    expect(urlify(string)).toEqual('Mr%20John%20Smith')
  })

})

describe('1.4 Palindrome Permutation', function(){

  const palindromePerm = 'Tact Coa'
  const notPalindromePerm = 'Tact Coa T'

  it('Should return true if a permutation to palindrome is possible', function(){
    expect(palindromePermutation(palindromePerm)).toEqual(true)
  })

  it('Should return false if not a permutation of a palindrome', function(){
    expect(palindromePermutation(notPalindromePerm)).toEqual(false)
  })

})

describe('1.5 One Away', function(){

  it('Should return true for pale & ple', function(){
    expect(oneAway('pale', 'ple')).toEqual(true)
  })

  it('Should return true for pales & pale', function(){
    expect(oneAway('pales', 'pale')).toEqual(true)
  })

  it('Should return true for pale & bale', function(){
    expect(oneAway('pale', 'bale')).toEqual(true)
  })

  it('Should return false for pale & bake', function(){
    expect(oneAway('pale', 'bake')).toEqual(false)
  })

  it('Should return false for paale & bakke', function(){
    expect(oneAway('paale', 'bakke')).toEqual(false)
  })

})


describe('1.6 String Compression', function(){

  const string = 'aabcccccaaa'
  const string1 = 'abcdefg'

  it('Should return a compressed string', function(){
    expect(strCompression(string)).toEqual('a2b1c5a3')
  })

  it('Should return the original string if compressed string is not shorter', function(){
    expect(strCompression(string1)).toEqual('abcdefg')
  })

})
