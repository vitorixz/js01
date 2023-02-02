var text = ['i', 'e', 's', ' ', 'u', 'e', ' ', 'e', 'u', 'q', ',', 'a', 'i', 'l', 'a', 'r', 't', 's', 'u', 'a', ' ', 'a', 'n', ' ', 'a', 'd', 'n', 'u', 'b', ' ', 'a', ' ', 'r', 'a', 'd', ' ', 'i', 'a', 'v'];
    let result = '';

    text.reverse().forEach(l => {
        result += l
    })
    console.log(result.replace('/-/', ' '));