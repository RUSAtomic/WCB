module.exports = {
    name: '300',
    description: 'Упонимание в тексте различных вариаций 300',
    execute(message) {
      const myStr = ["300", "299+1", "200+100", "тристо" ,"триста"];
      if (myStr.some(v => message.content.toLowerCase().includes(v))) {
        message.channel.send("Кто там что про тракториста? :rofl:");
      }
    },
}
