
CCATHelper = {
    createControls: function(selector) {
        $(selector).append(makeParseAttribute("pos", [
            ["adjective", "A-"],
            ["conjunction", "C-"],
            ["adverb", "D-"],
            ["interjection", "I-"],
            ["noun", "N-"],
            ["preposition", "P-"],
            ["article", "RA"],
            ["demonstrative", "RD"],
            ["interrogative", "RI"],
            ["personal pronoun", "RP"],
            ["relative pronoun", "RR"],
            ["verb", "V-"],
            ["exclamation", "X-"]
        ]));
        
        $(selector).append(makeParseAttribute("mood", [
            ["imperative", "D"],
            ["indicative", "I"],
            ["infinitive", "N"],
            ["optative", "O"],
            ["participle", "P"],
            ["subjunctive", "S"]
        ]));
        
        $(selector).append(makeParseAttribute("person", [
            ["first", "1"],
            ["second", "2"],
            ["third", "3"]
        ]));
        
        $(selector).append(makeParseAttribute("tense", [
            ["aorist", "A"],
            ["future", "F"],
            ["imperfect", "I"],
            ["present", "P"],
            ["perfect", "X"],
            ["pluperfect", "Y"]
        ]));
        
        $(selector).append(makeParseAttribute("voice", [
            ["active", "A"],
            ["middle", "M"],
            ["passive", "P"]
        ]));
        
        $(selector).append(makeParseAttribute("case", [
            ["accusative", "A"],
            ["dative", "D"],
            ["genitive", "G"],
            ["nominative", "N"],
            ["vocative", "V"]
        ]));
        
        $(selector).append(makeParseAttribute("number", [
            ["plural", "P"],
            ["singular", "S"]
        ]));
        
        $(selector).append(makeParseAttribute("gender", [
            ["feminine", "F"],
            ["masculine", "M"],
            ["neuter", "N"]
        ]));
        
        $(selector).append(makeParseAttribute("degree", [
            ["comparative", "C"],
            ["superlative", "S"]
        ]));
    },
    toggleAttributes: function(el) {
        
        var pos = getValue(el, ".pos", "??");
        
        if (pos == "A-") {
            displayAttributes(el,
                [".case", ".number", ".gender", ".degree"],
                [".person", ".tense", ".voice", ".mood"]
            );
        }
        else if (pos == "C-") {
            displayAttributes(el,
                [],
                [".person", ".tense", ".voice", ".mood", ".case", ".number",".gender", ".degree"]
            );
        }
        else if (pos == "D-") {
            displayAttributes(el,
                [".degree"],
                [".person", ".tense", ".voice", ".mood", ".case", ".number",".gender"]
            );
        }
        else if (pos == "I-") {
            displayAttributes(el,
                [],
                [".person", ".tense", ".voice", ".mood", ".case", ".number",".gender", ".degree"]
            );
        }
        else if (pos == "N-") {
            displayAttributes(el,
                [".case", ".number", ".gender"],
                [".person", ".tense", ".voice", ".mood", ".degree"]
            );
        }
        else if (pos == "P-") {
            displayAttributes(el,
                [],
                [".person", ".tense", ".voice", ".mood", ".case", ".number",".gender", ".degree"]
            );
        }
        else if (pos == "RA") {
            displayAttributes(el,
                [".case", ".number", ".gender"],
                [".person", ".tense", ".voice", ".mood", ".degree"]
            );
        }
        else if (pos == "RD") {
            displayAttributes(el,
                [".case", ".number", ".gender"],
                [".person", ".tense", ".voice", ".mood", ".degree"]
            );
        }
        else if (pos == "RI") {
            displayAttributes(el,
                [".case", ".number", ".gender"],
                [".person", ".tense", ".voice", ".mood", ".degree"]
            );
        }
        else if (pos == "RP") {
            displayAttributes(el,
                [".case", ".number", ".gender"],
                [".person", ".tense", ".voice", ".mood", ".degree"]
            );
        }
        else if (pos == "RR") {
            displayAttributes(el,
                [".case", ".number", ".gender"],
                [".person", ".tense", ".voice", ".mood", ".degree"]
            );
        }
        else if (pos == "V-") {
            var mood = getValue(el, ".mood", "-");
            if (mood == "N") {
                displayAttributes(el,
                    [".tense", ".voice", ".mood"],
                    [".person", ".case", ".number", ".gender", ".degree"]
                );
            }
            else if (mood == "P") {
                displayAttributes(el,
                    [".case", ".number", ".gender", ".tense", ".voice", ".mood"],
                    [".person", ".degree"]
                );
            }
            else {
                displayAttributes(el,
                    [".person", ".number", ".tense", ".voice", ".mood"],
                    [".case", ".gender", ".degree"]
                );
            }
        }
        else if (pos == "X-") {
            displayAttributes(el,
                [],
                [".person", ".tense", ".voice", ".mood", ".case", ".number",".gender", ".degree"]
            );
        }
    },
    generateParseCode: function(el) {
        var pos = getValue(el, ".pos", "??");
        var person = getValue(el, ".person", "-");
        var tense = getValue(el, ".tense", "-");
        var voice = getValue(el, ".voice", "-");
        var mood = getValue(el, ".mood", "-");
        var kase = getValue(el, ".case", "-");
        var number = getValue(el, ".number", "-");
        var gender = getValue(el, ".gender", "-");
        var degree = getValue(el, ".degree", "-");
        
        var parse = pos + " " + person + tense + voice + mood + kase + number + gender + degree;
        
        return parse;
    },
    toggleFromParseCode: function(selector1, selector2) {
        
        var parse = $(selector2).val();
        
        setValue(selector1, "pos", parse[0] + parse[1]);
        setValue(selector1, "person", parse[3]);
        setValue(selector1, "tense", parse[4]);
        setValue(selector1, "voice", parse[5]);
        setValue(selector1, "mood", parse[6]);
        setValue(selector1, "case", parse[7]);
        setValue(selector1, "number", parse[8]);
        setValue(selector1, "gender", parse[9]);
        setValue(selector1, "degree", parse[10]);
    }
}
