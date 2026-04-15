const message = `Happy birthday, Ann.\nIt's funny, isn't it? Time keeps moving forward, yet some parts of your life still feel stagnant. Unresolved feelings, hopes you still cling to, or hurts you pretend have disappeared.\nAt this point in your life, I hope you're starting to realize—not everything you fight for is meant to stay. Some things come only to teach you what it's like to be disappointed, then leave without warning.\nAnd you... you're still here, still trying, even when you don't really know why anymore.
Ann, you don't have to always act strong. The world won't collapse if you take a break. It's okay if today feels empty, or if you feel lost. Not everyone has a clear map, and that's not your fault.\nMaybe you've been so understanding of others that you've forgotten what it feels like to be understood. You've been holding on for so long, not realizing that what you're holding on to is slowly destroying you.\nIf there's one thing you can change in this new chapter, I hope it's how you treat yourself. Stop forcing things, stop hoping for uncertainties, and start learning to let go without waiting for the perfect reason.\nBecause let's be honest, Ann… not everything needs to be fixed. Some things are meant to end, even if you're not ready.\nOnce again, happy birthday, Ann.\nMay good luck always be with you, may you live long, and may you always be surrounded by good people.`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}
