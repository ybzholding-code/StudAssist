import mammoth from "mammoth";

mammoth.extractRawText({path: "../10. SPEC FORMULAIRE CONTACT.docx"})
    .then(function(result){
        console.log(result.value);
    })
    .catch(function(err){
        console.log(err);
    });
