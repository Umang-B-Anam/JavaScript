function count( str)
{
    vowel=0;
    for(let i of str)
    {
        if(i==="a"||i==="e"||i==="i"||i==="o"||i==="u")
        {
            vowel++;
        }
    }
    console.log(vowel);
}
count("esa nahi karte bachha")
