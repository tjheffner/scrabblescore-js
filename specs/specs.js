describe('score', function () {
    it("will return a score of 1 for the letter 'a'", function() {
        expect(score("a")).to.equal(1);
    });

    it("will return a score of 2 for the letters 'at'", function() {
        expect(score("at")).to.equal(2);
    });

    it("will return a score of 5 for the letters 'bat'", function() {
        expect(score("bat")).to.equal(5);
    });

    it("will return a score of 22 for the letters 'quiz'", function() {
        expect(score("quiz")).to.equal(22);
    });

    it("will ignore numbers in the input and just return letter values", function() {
        expect(score("at1")).to.equal(2);
    });

    it("will ignore punctuation in the input and just return letter values", function() {
        expect(score("at,,,,")).to.equal(2);
    });

});
