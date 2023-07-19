const express = require('express');
const app = express();

const steveJobsQuotes = [
    "Design is not just what it looks like and feels like. Design is how it works.",
    "My favorite things in life don't cost any money. It's really clear that the most precious resource we all have is time.",
    "Design is a funny word. Some people think design means how it looks. But of course, if you dig deeper, it's really how it works.",
    "You can't connect the dots looking forward; you can only connect them looking backwards. So you have to trust that the dots will somehow connect in your future. You have to trust in something - your gut, destiny, life, karma, whatever. This approach has never let me down, and it has made all the difference in my life.",
    "Being the richest man in the cemetery doesn't matter to me. Going to bed at night saying we've done something wonderful, that's what matters to me.",
    "We don't get a chance to do that many things, and every one should be really excellent. Because this is our life. Life is brief, and then you die, you know? So this is what we've chosen to do with our life.",
    "I want to put a ding in the universe.",
    "If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it. And, like any great relationship, it just gets better and better as the years roll on.",
    "Be a yardstick of quality. Some people aren't used to an environment where excellence is expected.",
    "I think if you do something and it turns out pretty good, then you should go do something else wonderful, not dwell on it for too long. Just figure out what’s next.",
    "Quality is much better than quantity. One home run is much better than two doubles.",
    "When you’re a carpenter making a beautiful chest of drawers, you’re not going to use a piece of plywood on the back, even though it faces the wall and nobody will see it. You’ll know it’s there, so you’re going to use a beautiful piece of wood on the back. For you to sleep well at night, the aesthetic, the quality, has to be carried all the way through.",
    "Here’s to the crazy ones, the misfits, the rebels, the troublemakers, the round pegs in the square holes… The ones who see things differently — they’re not fond of rules… You can quote them, disagree with them, glorify or vilify them, but the only thing you can’t do is ignore them because they change things… They push the human race forward, and while some may see them as the crazy ones, we see genius, because the ones who are crazy enough to think that they can change the world, are the ones who do.",
    "Stay hungry. Stay foolish.",
    "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven’t found it yet, keep looking. Don’t settle. As with all matters of the heart, you’ll know when you find it.",
    "I’m as proud of many of the things we haven’t done as the things we have done. Innovation is saying no to a thousand things.",
    "Have the courage to follow your heart and intuition. They somehow know what you truly want to become.",
    "The people who are crazy enough to think they can change the world are the ones who do.",
    "For the past 33 years, I have looked in the mirror every morning and asked myself: ‘If today were the last day of my life, would I want to do what I am about to do today?’ And whenever the answer has been ‘No’ for too many days in a row, I know I need to change something.",
    "I'm convinced that about half of what separates successful entrepreneurs from the non-successful ones is pure perseverance.",
    "I’ve always been attracted to the more revolutionary changes. I don’t know why. Because they’re harder. They’re much more stressful emotionally. And you usually go through a period where everybody tells you that you’ve completely failed.",
    "Remembering that you are going to die is the best way I know to avoid the trap of thinking you have something to lose. You are already naked. There is no reason not to follow your heart."
  ];
  
  app.get('/quote', (req, res) => {
    const randomIndex = Math.floor(Math.random() * steveJobsQuotes.length);
    const quote = steveJobsQuotes[randomIndex];
    res.json({ quote });
  });

  
const port = 3000; // Puedes cambiar el puerto si es necesario

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});