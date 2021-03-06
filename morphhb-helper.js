
MorphHBHelper = {
    createControls: function (selector) {
        $(selector).append(makeParseAttribute("pos", [
            ["adjective", "A"],
            ["conjunction", "C"],
            ["adverb", "D"],
            ["noun", "N"],
            ["pronoun", "P"],
            ["preposition", "R"],
            ["suffix", "S"],
            ["particle", "T"],
            ["verb", "V"]
        ]));
        
        $(selector).append(makeParseAttribute("adjective-type", [
            ["adjective", "a"],
            ["cardinal number", "c"],
            ["ordinal number", "o"]
        ]));
        
        $(selector).append(makeParseAttribute("conjunction-type", [
            ["conjunctive", "c"],
            ["vav consecutive", "v"]
        ]));
        
        $(selector).append(makeParseAttribute("noun-type", [
            ["common", "c"],
            ["gentilic", "g"],
            ["proper name", "p"]
        ]));
        
        $(selector).append(makeParseAttribute("pronoun-type", [
            ["demonstrative", "d"],
            ["indefinite", "f"],
            ["interrogative", "i"],
            ["personal", "p"],
            ["relative", "r"]
        ]));
        
        $(selector).append(makeParseAttribute("preposition-type", [
            ["independent", "i"],
            ["bet inseparable", "b"],
            ["kaf inseparable", "k"],
            ["lamed inseparable", "l"],
            ["mem inseparable", "m"],
        ]));
        
        $(selector).append(makeParseAttribute("suffix-type", [
            ["directional he", "d"],
            ["paragogic he", "h"],
            ["paragogic num", "n"],
            ["pronominal", "p"],
        ]));
        
        $(selector).append(makeParseAttribute("particle-type", [
            ["affirmation", "a"],
            ["definite article", "d"],
            ["exhortation", "e"],
            ["interrogative", "i"],
            ["interjection", "j"],
            ["demonstrative", "m"],
            ["negative", "n"],
            ["direct object marker", "o"],
            ["relative", "r"],
            ["prefixed relative (shin)", "s"],
        ]));
        
        $(selector).append(makeParseAttribute("aspect", [
            ["perfect", "p"],
            ["sequential perfect", "q"],
            ["imperfect", "i"],
            ["sequential imperfect", "w"],
            ["infinitive absolute", "a"],
            ["infinitive construct", "c"],
            ["cohortative", "h"],
            ["imperative", "v"],
            ["jussive", "j"],
            ["participle active", "r"],
            ["participle passive", "s"],
        ]));
        
        $(selector).append(makeParseAttribute("definiteness", [
            ["definite", "d"],
            ["indefinite", "i"],
        ]));
        
        $(selector).append(makeParseAttribute("case", [
            ["accusative", "a"],
            ["nominative", "n"],
        ]));
        
        $(selector).append(makeParseAttribute("person", [
            ["first", "1"],
            ["second", "2"],
            ["third", "3"]
        ]));
        
        $(selector).append(makeParseAttribute("gender", [
            ["both", "b"],
            ["common", "c"],
            ["feminine", "f"]
            ["masculine", "m"]
        ]));
        
        $(selector).append(makeParseAttribute("number", [
            ["dual", "d"],
            ["plural", "p"],
            ["singular", "s"]
        ]));
        
        $(selector).append(makeParseAttribute("state", [
            ["construct", "c"],
            ["determined", "d"]
        ]));
    },
    toggleAttributes: function(el) {
        
        var pos = getValue(el, ".pos", "??");
        
        if (pos == "A") {
            displayAttributes(el,
                [".adjective-type", ".gender", ".number", ".state"],
                [".case", ".person", ".conjunction-type", ".pronoun-type",
                 ".preposition-type", ".definiteness", ".suffix-type",
                 ".particle-type", ".stem", ".aspect", ".noun-type"]
            );
        }
        else if (pos == "C") {
            displayAttributes(el,
                [".conjunction-type"],
                [".case", ".person", ".adjective-type", ".gender", ".number",
                 ".state", ".pronoun-type", ".preposition-type",
                 ".definiteness", ".suffix-type", ".particle-type", ".stem",
                 ".aspect", ".noun-type"]
            );
        }
        else if (pos == "D") {
            displayAttributes(el,
                [],
                [".case", ".person", ".adjective-type", ".gender", ".number",
                 ".state", ".pronoun-type", ".preposition-type",
                 ".definiteness", ".suffix-type", ".particle-type", ".stem",
                 ".aspect", ".conjunction-type", ".noun-type"]
            );
        }
        else if (pos == "N") {
            displayAttributes(el,
                [".noun-type", ".gender", ".number", ".state"],
                [".case", ".person", ".adjective-type",
                 ".pronoun-type", ".preposition-type",
                 ".definiteness", ".suffix-type", ".particle-type", ".stem",
                 ".aspect", ".conjunction-type"]
            );
        }
        else if (pos == "P") {
            displayAttributes(el,
                [".pronoun-type", ".case", ".person", ".gender", ".number",
                 ".state"],
                [".adjective-type",
                 ".preposition-type", ".noun-type",
                 ".definiteness", ".suffix-type", ".particle-type", ".stem",
                 ".aspect", ".conjunction-type"]
            );
        }
        else if (pos == "R") {
            displayAttributes(el,
                [".preposition-type", ".definiteness"],
                [".case", ".person", ".adjective-type", ".noun-type", 
                 ".pronoun-type",  ".number", ".state", ".gender",
                 ".suffix-type", ".particle-type", ".stem",
                 ".aspect", ".conjunction-type"]
            );
        }
        else if (pos == "S") {
            displayAttributes(el,
                [".suffix-type", ".gender", ".number", ".state"],
                [".case", ".person", ".adjective-type",
                 ".pronoun-type", ".preposition-type", ".noun-type", 
                 ".definiteness", ".particle-type", ".stem",
                 ".aspect", ".conjunction-type"]
            );
        }
        else if (pos == "T") {
            displayAttributes(el,
                [".particle-type"],
                [".case", ".person", ".adjective-type", ".noun-type",
                 ".pronoun-type", ".preposition-type", ".gender", ".number",
                 ".definiteness", ".suffix-type", ".stem", ".state",
                 ".aspect", ".conjunction-type"]
            );
        }
        else if (pos == "V") {
            displayAttributes(el,
                [".stem", ".aspect", ".person", ".gender", ".number",
                 ".state"],
                [".noun-type", ".case", ".adjective-type",
                 ".pronoun-type", ".preposition-type",
                 ".definiteness", ".suffix-type", ".particle-type",
                 ".conjunction-type"]
            );
        }
    },
    generateParseCode: function(el) {
        var pos = getValue(el, ".pos", "?");
        var adjective_type = getValue(el, ".adjective-type", "?");
        var conjunction_type = getValue(el, ".conjunction-type", "?");
        var noun_type = getValue(el, ".noun-type", "?");
        var pronoun_type = getValue(el, ".pronoun-type", "?");
        var preposition_type = getValue(el, ".preposition-type", "?");
        var suffix_type = getValue(el, ".suffix-type", "?");
        var particle_type = getValue(el, ".particle-type", "?");
        var aspect = getValue(el, ".aspect", "?");
        var definiteness = getValue(el, ".definiteness", "?");
        var kase = getValue(el, ".case", "?");
        var person = getValue(el, ".person", "?");
        var gender = getValue(el, ".gender", "?");
        var number = getValue(el, ".number", "?");
        var state = getValue(el, ".state", "?");
        
        var parse;
        
        if (pos == "A") {
            parse = pos + adjective_type + gender + number + state;
        }
        else if (pos == "C") {
            parse = pos + conjunction_type;
        }
        else if (pos == "D") {
            parse = pos;
        }
        else if (pos == "N") {
            parse = pos + noun_type + gender + number + state;
        }
        else if (pos == "P") {
            parse = pos + pronoun_type + kase + person + gender + number + state;
        }
        else if (pos == "R") {
            parse = pos + preposition_type + definiteness;
        }
        else if (pos == "S") {
            parse = pos + suffix_type + gender + number + state;
        }
        else if (pos == "T") {
            parse = pos + particle_type;
        }
        else if (pos == "V") {
            parse = pos + stem + aspect + person + gender + number + state;
        }
        
        return parse;
    },
    toggleFromParseCode: function(selector1, selector2) {
        // 
        // var parse = $(selector2).val();
        // 
        // setValue(selector1, "pos", parse[0] + parse[1]);
        // setValue(selector1, "person", parse[3]);
        // setValue(selector1, "tense", parse[4]);
        // setValue(selector1, "voice", parse[5]);
        // setValue(selector1, "mood", parse[6]);
        // setValue(selector1, "case", parse[7]);
        // setValue(selector1, "number", parse[8]);
        // setValue(selector1, "gender", parse[9]);
        // setValue(selector1, "degree", parse[10]);
    }
}
