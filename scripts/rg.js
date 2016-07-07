$(document).ready(function() {

    console.log("ready!");
    var notenames = ["e", "f", "fsh", "g", "gsh", "a", "ash", "b", "c", "csh", "d", "dsh"];
    var note = ".note";
    var fretnote = "#guitarneck .";

    //major chords
    var major = [0, 4, 7];
    var six = [0, 4, 7, 9];
    var sixnine = [0, 2, 4, 7, 9];
    var major7 = [0, 4, 7, 11]
    var major911 = [0, 2, 4, 6, 7, 11]

    //major harmonised chords

    var majchordi = [0, 4, 7, 11];
    var majchordii = [2, 5, 9, 0];
    var majchordiii = [4, 7, 11, 2];
    var majchordiv = [5, 9, 0, 4];
    var majchordv = [7, 11, 2, 5];
    var majchordvi = [9, 0, 4, 7];
    var majchordvii = [11, 2, 5, 9];


    //minor chords
    var minor = [0, 3, 7];
    var minor6 = [0, 3, 7, 9];
    var minor7 = [0, 3, 7, 10];
    var minor7b5 = [0, 3, 6, 10];
    var minormaj7 = [0, 3, 7, 11];
    var minor9 = [0, 2, 3, 7, 10];
    var minor11 = [0, 2, 3, 5, 7, 10];
    var minor13 = [0, 2, 3, 5, 7, 9, 10];

    //dominant chords
    var dom7 = [0, 4, 7, 10];
    var dom9 = [0, 2, 4, 7, 10];
    var dom13 = [0, 2, 4, 7, 9, 10];
    var dom7b9 = [0, 4, 7, 10];
    var dom7sh9 = [0, 3, 4, 7, 10];
    var dom7b5 = [0, 4, 6, 10];

    //diminished chords
    var dim = [0, 3, 6];
    var dim7 = [0, 3, 6, 9];

    //suspended chords
    var sus2 = [0, 2, 7];
    var sus74 = [0, 5, 7, 10];

    //scales    
    var majorsc = [0, 2, 4, 5, 7, 9, 11];
    var minorsc = [0, 2, 3, 5, 7, 8, 10];
    var harminorsc = [0, 2, 3, 5, 7, 8, 11];
    var majorpent = [0, 2, 4, 7, 9];
    var minorpent = [0, 3, 5, 7, 10];
    var majorblues = [0, 2, 3, 4, 7, 9];
    var minorblues = [0, 3, 5, 6, 7, 10];

    var notes = $("#guitarneck .note*");

    console.log(notes);

    function reset() {
        $("#guitarneck .note").children().fadeOut("fast", "linear");
        $(".dot").removeClass("noteon");
        $(".dot").removeClass("noteonroot");
        $("button.active").removeClass("active");
    var notestoplay = [];
    }
    $(".reset").click(function() {
        reset();
    });

    reset();

    $(".major").click(function() {
        makechord(major);
        $(this).addClass("active");
    });
    $(".minor").click(function() {
        makechord(minor);
        $(this).addClass("active");
    });
    $(".six").click(function() {
        makechord(six);
        $(this).addClass("active");
    });
    $(".sixnine").click(function() {
        makechord(sixnine);
        $(this).addClass("active");
    });
    $(".major7").click(function() {
        makechord(major7);
        $(this).addClass("active");
    });
    $(".major911").click(function() {
        makechord(major911);
        $(this).addClass("active");
    });
    $(".majorsc").click(function() {
        makechord(majorsc);
        $(this).addClass("active");
    });
    $(".minorsc").click(function() {
        makechord(minorsc);
        $(this).addClass("active");
    });
    $(".harminorsc").click(function() {
        makechord(harminorsc);
        $(this).addClass("active");
    });
    $(".majorpent").click(function() {
        makechord(majorpent);
        $(this).addClass("active");
    });
    $(".minorpent").click(function() {
        makechord(minorpent);
        $(this).addClass("active");
    });
    $(".majorblues").click(function() {
        makechord(majorblues);
        $(this).addClass("active");
    });
    $(".minorblues").click(function() {
        makechord(minorblues);
        $(this).addClass("active");
    });
    $(".minor6").click(function() {
        makechord(minor6);
        $(this).addClass("active");
    });
    $(".minor7").click(function() {
        makechord(minor7);
        $(this).addClass("active");
    });
    $(".minor7b5").click(function() {
        makechord(minor7b5);
        $(this).addClass("active");
    });
    $(".minormaj7").click(function() {
        makechord(minormaj7);
        $(this).addClass("active");
    });
    $(".minor9").click(function() {
        makechord(minor9);
        $(this).addClass("active");
    });
    $(".minor11").click(function() {
        makechord(minor11);
        $(this).addClass("active");
    });
    $(".minor13").click(function() {
        makechord(minor13);
        $(this).addClass("active");
    });
    $(".dom7").click(function() {
        makechord(dom7);
        $(this).addClass("active");
    });
    $(".dom9").click(function() {
        makechord(dom9);
        $(this).addClass("active");
    });
    $(".dom13").click(function() {
        makechord(dom13);
        $(this).addClass("active");
    });
    $(".dom7b9").click(function() {
        makechord(dom7b9);
        $(this).addClass("active");
    });
    $(".dom7sh9").click(function() {
        makechord(dom7sh9);
        $(this).addClass("active");
    });
    $(".dom7b5").click(function() {
        makechord(dom7b5);
        $(this).addClass("active");
    });
    $(".dim").click(function() {
        makechord(dim);
        $(this).addClass("active");
    });
    $(".dim7").click(function() {
        makechord(dim7);
        $(this).addClass("active");
    });
    $(".sus2").click(function() {
        makechord(sus2);
        $(this).addClass("active");
    });
    $(".sus74").click(function() {
        makechord(sus74);
        $(this).addClass("active");
    });


    $(".majchordi").click(function() {
        makechord(majchordi);
        $(this).addClass("active");
    });
    $(".majchordii").click(function() {
        makechord(majchordii);
        $(this).addClass("active");
    });
    $(".majchordiii").click(function() {
        makechord(majchordiii);
        $(this).addClass("active");
    });
    $(".majchordiv").click(function() {
        makechord(majchordiv);
        $(this).addClass("active");
    });
    $(".majchordv").click(function() {
        makechord(majchordv);
        $(this).addClass("active");
    });
    $(".majchordvi").click(function() {
        makechord(majchordvi);
        $(this).addClass("active");
    });
    $(".majchordvii").click(function() {
        makechord(majchordvii);
        $(this).addClass("active");
    });




    function buildharmonicscales(keynumber) {
        console.log("============ NEW ===========");
        console.log("keynumber = " + keynumber);
        console.log("major scale = " + majorsc);
        console.log("============ NEW ===========");




    }

    var currentkey = 0;
    buildharmonicscales(currentkey);




    $('select').on('change', function() {
        reset();
        keynumber = $(this).val(); // or $(this).val()
        currentkey = parseInt(keynumber);
        buildharmonicscales(currentkey);
    });

    var notestoplay = [];

    function makechord(input) {
    	    var notestoplay = [];

        reset();
        input = $.makeArray(input);
        console.log("input = " + input);
        var realinput = $.map(input, function(val, i) {
            console.log("realinput = " + input + " | val = " + val + " | i = " + i);
            val = val + currentkey;
            console.log("new value = " + val + " | currentkey = " + currentkey);
            if (val >= 12) {
                val = val - 12;
            }
            return val
            console.log("New value after subtracting 12 = " + val);
        });
        console.log("input = " + realinput);
        $.each(realinput, function(i, c) {
            var noteinsert = notenames[c];
            var rootnote = notenames[currentkey];
            console.log("chord = " + realinput + " | i = " + i + " | notenames = " + notenames[c] + " | currentkey = " + currentkey + " | rootnote = " + rootnote);

            notestoplay.push(notenames[c]+"2");

// +(Math.floor(Math.random() * 4) + 1)
     //        notestoplay.push(notenames[c]+"1");
//             notestoplay.push(notenames[c]+"2");
//             notestoplay.push(notenames[c]+"3");
//             notestoplay.push(notenames[c]+"4");


            $("#guitarneck ." + noteinsert + "1, #guitarneck ." + noteinsert + "2, #guitarneck ." + noteinsert + "3, #guitarneck ." + noteinsert + "4").children().fadeToggle("fast", "linear");
            $("#guitarneck ." + rootnote + "1 .dot, #guitarneck ." + rootnote + "2 .dot, #guitarneck ." + rootnote + "3 .dot, #guitarneck ." + rootnote + "4 .dot").addClass("noteonroot");
            $(".noteswitches .note" + noteinsert + " .dot").addClass("noteon");
            $(".noteswitches .note" + rootnote + " .dot").addClass("noteonroot");
        });
        console.log(notestoplay + "= notestoplay");
        playnotes(notestoplay);
    };


    $.each(notenames, function(intValue, i) {
        $(note + i).click(function() {

            $("#guitarneck ." + i + "1, #guitarneck ." + i + "2, #guitarneck ." + i + "3, #guitarneck ." + i + "4").children().fadeToggle("fast", "linear");
            $(note + i + " .dot").toggleClass("noteon");
            var rootnote = notenames[currentkey];
            $(".noteswitches .note" + rootnote + " .dot").addClass("noteonroot");
            console.log("note clicked = " + i);
            console.log("intValue = " + intValue);
        });

    });


    //play the notes
    var notesaudible = false;
	var 	intervalID = 0;
    function playnotes(notestoplay) {

        notesaudible = true;

        console.log(notestoplay + " = starting array");
        
        if (notestoplay.length == 3) {
        
        console.log("note to play length (3) = "+notestoplay.length);
        
        };
        
        if (notestoplay.length == 4) {
        console.log("note to play length (4) = "+notestoplay.length);
        
        };
        
        if (notestoplay.length == 5) {
        console.log("note to play length (5) = "+notestoplay.length);
        
        };
        
        if (notestoplay.length == 6) {
        
        console.log("note to play length (6) = "+notestoplay.length);
        };        
        
        if (notestoplay.length == 7) {
        console.log("note to play length (7) = "+notestoplay.length);
        
        };  
        
        var curNote = 0;
        var intervalID = setInterval(function() {
            ion.sound.play(notestoplay[curNote]); // set new news item into the ticker
            ++curNote;
            if (curNote >= notestoplay.length) {
                clearInterval(intervalID);
            }
            console.log("note playing = "+notestoplay[curNote]);
            console.log("notesaudible = "+notesaudible);
        console.log(notestoplay + " = note array during setInterval");
        }, 1000 * 60 / ($("#bpm").slider("option", "value")) /8);

    };

    // metronome
    var intervalReference = 0;
    $(".stopmet").click(function() {
        clearInterval(intervalReference);
    });

    $(".startmet").click(function() {
        var tempovalue = $("#bpm").slider("option", "value");
        clearInterval(intervalReference);
        intervalReference = setInterval(metronomeTick, 1000 * 60 / tempovalue);
    });

    var metronomeTick = function() {
        //    $("#metronome").stop(); // stops previous animations
        //    $("#metronome").animate({opacity: 1},
        //                            30,                            
        //                            function() { $(this).animate({opacity:0.5}); }
        //   );

        ion.sound.play("snap");

    };


    var slider = $("#bpm").slider({
        min: 40,
        max: 240,
        value: 120,
        slide: function(event, tempo) {
            clearInterval(intervalReference);
            intervalReference = setInterval(metronomeTick, 1000 * 60 / tempo.value);
            $("#bpmshow").text(tempo.value);
        }

    });
    console.log(slider);



    // init bunch of sounds
    ion.sound({
        sounds: [{
            name: "beer_can_opening"
        }, {
            name: "snap"
        }, {
            name: "estring"
        }, {
            name: "astring"
        }, {
            name: "dstring"
        }, {
            name: "gstring"
        }, {
            name: "bstring"
        }, {
            name: "estringt"
        }, {
            name: "e1"
        }, {
            name: "f1"
        }, {
            name: "fsh1"
        }, {
            name: "g1"
        }, {
            name: "gsh1"
        }, {
            name: "a1"
        }, {
            name: "ash1"
        }, {
            name: "b1"
        }, {
            name: "c2"
        }, {
            name: "csh2"
        }, {
            name: "d2"
        }, {
            name: "dsh2"
        }, {
            name: "e2"
        }, {
            name: "f2"
        }, {
            name: "fsh2"
        }, {
            name: "g2"
        }, {
            name: "gsh2"
        }, {
            name: "a2"
        }, {
            name: "ash2"
        }, {
            name: "b2"
        }, {
            name: "c3"
        }, {
            name: "csh3"
        }, {
            name: "d3"
        }, {
            name: "dsh3"
        }, {
            name: "e3"
        }, {
            name: "f3"
        }, {
            name: "fsh3"
        }, {
            name: "g3"
        }, {
            name: "gsh3"
        }, {
            name: "a3"
        }, {
            name: "ash3"
        }, {
            name: "b3"
        }, {
            name: "c4"
        }, {
            name: "csh4"
        }, {
            name: "d4"
        }, {
            name: "dsh4"
        }, {
            name: "e4"
        }, {
            name: "f4"
        }, {
            name: "fsh4"
        }, {
            name: "g4"
        }, {
            name: "gsh4"
        }, {
            name: "a4"
        }, {
            name: "ash4"
        }, {
            name: "b4"
        }, {
            name: "c5"
        }, {
            name: "csh5"
        }, {
            name: "d5"
        }, {
            name: "dsh5"
        }, {
            name: "e5"
        }, ],

        // main config
        path: "scripts/sounds/",
        preload: true,
        multiplay: true,
        volume: 0.9
    });

    // play sound
    ion.sound.play("beer_can_opening");

    $(".tunerbox .e1").click(function() {
        ion.sound.play("estring");
    });
    $(".tunerbox .a1").click(function() {
        ion.sound.play("astring");
    });
    $(".tunerbox .d2").click(function() {
        ion.sound.play("dstring");
    });
    $(".tunerbox .g2").click(function() {
        ion.sound.play("gstring");
    });
    $(".tunerbox .b2").click(function() {
        ion.sound.play("bstring");
    });
    $(".tunerbox .e3").click(function() {
        ion.sound.play("estringt");
    });




    $("#guitarneck .e1 .dot").click(function() {
        ion.sound.play("e1");
    });
    $("#guitarneck .f1 .dot").click(function() {
        ion.sound.play("f1");
    });
    $("#guitarneck .fsh1 .dot").click(function() {
        ion.sound.play("fsh1");
    });
    $("#guitarneck .g1 .dot").click(function() {
        ion.sound.play("g1");
    });
    $("#guitarneck .gsh1 .dot").click(function() {
        ion.sound.play("gsh1");
    });
    $("#guitarneck .a1 .dot").click(function() {
        ion.sound.play("a1");
    });
    $("#guitarneck .ash1 .dot").click(function() {
        ion.sound.play("ash1");
    });
    $("#guitarneck .b1 .dot").click(function() {
        ion.sound.play("b1");
    });

    $("#guitarneck .c2 .dot").click(function() {
        ion.sound.play("c2");
    });
    $("#guitarneck .csh2 .dot").click(function() {
        ion.sound.play("csh2");
    });
    $("#guitarneck .d2 .dot").click(function() {
        ion.sound.play("d2");
    });
    $("#guitarneck .dsh2 .dot").click(function() {
        ion.sound.play("dsh2");
    });
    $("#guitarneck .e2 .dot").click(function() {
        ion.sound.play("e2");
    });
    $("#guitarneck .f2 .dot").click(function() {
        ion.sound.play("f2");
    });
    $("#guitarneck .fsh2 .dot").click(function() {
        ion.sound.play("fsh2");
    });
    $("#guitarneck .g2 .dot").click(function() {
        ion.sound.play("g2");
    });
    $("#guitarneck .gsh2 .dot").click(function() {
        ion.sound.play("gsh2");
    });
    $("#guitarneck .a2 .dot").click(function() {
        ion.sound.play("a2");
    });
    $("#guitarneck .ash2 .dot").click(function() {
        ion.sound.play("ash2");
    });
    $("#guitarneck .b2 .dot").click(function() {
        ion.sound.play("b2");
    });

    $("#guitarneck .c3 .dot").click(function() {
        ion.sound.play("c3");
    });
    $("#guitarneck .csh3 .dot").click(function() {
        ion.sound.play("csh3");
    });
    $("#guitarneck .d3 .dot").click(function() {
        ion.sound.play("d3");
    });
    $("#guitarneck .dsh3 .dot").click(function() {
        ion.sound.play("dsh3");
    });
    $("#guitarneck .e3 .dot").click(function() {
        ion.sound.play("e3");
    });
    $("#guitarneck .f3 .dot").click(function() {
        ion.sound.play("f3");
    });
    $("#guitarneck .fsh3 .dot").click(function() {
        ion.sound.play("fsh3");
    });
    $("#guitarneck .g3 .dot").click(function() {
        ion.sound.play("g3");
    });
    $("#guitarneck .gsh3 .dot").click(function() {
        ion.sound.play("gsh3");
    });
    $("#guitarneck .a3 .dot").click(function() {
        ion.sound.play("a3");
    });
    $("#guitarneck .ash3 .dot").click(function() {
        ion.sound.play("ash3");
    });
    $("#guitarneck .b3 .dot").click(function() {
        ion.sound.play("b3");
    });

    $("#guitarneck .c4 .dot").click(function() {
        ion.sound.play("c4");
    });
    $("#guitarneck .csh4 .dot").click(function() {
        ion.sound.play("csh4");
    });
    $("#guitarneck .d4 .dot").click(function() {
        ion.sound.play("d4");
    });
    $("#guitarneck .dsh4 .dot").click(function() {
        ion.sound.play("dsh4");
    });
    $("#guitarneck .e4 .dot").click(function() {
        ion.sound.play("e4");
    });
    $("#guitarneck .f4 .dot").click(function() {
        ion.sound.play("f4");
    });
    $("#guitarneck .fsh4 .dot").click(function() {
        ion.sound.play("fsh4");
    });
    $("#guitarneck .g4 .dot").click(function() {
        ion.sound.play("g4");
    });
    $("#guitarneck .gsh4 .dot").click(function() {
        ion.sound.play("gsh4");
    });
    $("#guitarneck .a4 .dot").click(function() {
        ion.sound.play("a4");
    });
    $("#guitarneck .ash4 .dot").click(function() {
        ion.sound.play("ash4");
    });
    $("#guitarneck .b4 .dot").click(function() {
        ion.sound.play("b4");
    });

    $("#guitarneck .c5 .dot").click(function() {
        ion.sound.play("c5");
    });
    $("#guitarneck .csh5 .dot").click(function() {
        ion.sound.play("csh5");
    });
    $("#guitarneck .d5 .dot").click(function() {
        ion.sound.play("d5");
    });
    $("#guitarneck .dsh5 .dot").click(function() {
        ion.sound.play("dsh5");
    });
    $("#guitarneck .e5 .dot").click(function() {
        ion.sound.play("e5");
    });


});