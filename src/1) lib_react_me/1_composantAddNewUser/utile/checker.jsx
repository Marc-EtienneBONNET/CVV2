export function checkCreateEmail(user)
{
    if (!user.email)
        return {code:-1, message:"Not email"};
    if (user.email.indexOf("@") === -1 || 
    (user.email.indexOf(".com") === -1 && user.email.indexOf(".fr") === -1))
        return {code:-2, message:"Email not valid"};
    return 0;
}

export function checkCreatePass(user)
{
    let checkMaj = 0;
    let checkSpaceCara = 0;

    if (!user.pass)
        return ({code:-1, message:"Not password"}); 
    if (user.pass && user.pass.length < 7)
        return ({code:-2, message:"Password must to have 7 caracter"});
    if (user.pass && user.pass !== user.checkPass)
        return ({code:-3, message:"Your password is not same"});
    for (let i = 0; user.pass[i]; i++)
    {
        if (user.pass[i] >= 'A' && user.pass[i] <= 'Z')
            checkMaj = 1;
        if (user.pass[i] === '@' || user.pass[i] === '!' ||
            user.pass[i] === '?' || user.pass[i] === '>' ||
            user.pass[i] === '<' || user.pass[i] === '$' ||
            user.pass[i] === '#' || user.pass[i] === '%')
            checkSpaceCara = 1;
    }
    if (checkMaj === 1 && checkSpaceCara === 1)
        return 1;
    else
        return ({code:-4, message:"Your password must to have\non speshel caracter (@ ! ? < > $ # %)\nand 1 maj"});
}