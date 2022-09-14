/*
    Basic container for storing language identifier and spoken words for progress-bar
 */
class SpokenLanguage
{
    keyIdentifier;
    progressWord;
    progressDoneWord;

    /*
              identifier: E, S
            progressWord: word appended to progress percent
        progressDoneWord: word to indicate finished
     */
    constructor(identifier, word, done) {
        this.keyIdentifier = identifier;
        this.progressWord = word;
        this.progressDoneWord = done;
    }    
}
