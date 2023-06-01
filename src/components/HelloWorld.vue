<template>
  <div class="hello">
    <button type="button" @click="logError">Log Error</button> 
    <br/>
    <button type="button" @click="raiseException">Raise Exeception</button>
  </div>
</template>

<script>
const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      nbError: 2,
      sentenceCharSize: 35000
    }
  },
  methods: {
    generateString(length) {
        let result = ' ';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    },
    logError() {
      // eslint-disable-next-line no-unused-vars
      for (const i of Array.from(Array(this.nbError).keys())
      ) {
        console.error(this.generateString(this.sentenceCharSize))
      }
    },
    raiseException() {
      for (const i of Array.from(Array(this.nbError).keys())
      ) {
        try {
          // eslint-disable-next-line no-undef
          methodNotDefined(i)
        } catch (error) {
          console.error(i +" methodNotDefined catch")
        }
      
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button  {
  margin: 1rem;
  cursor: pointer;
  outline: 0;
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 6px 12px;
  font-size: 1rem;
  border-radius: .25rem;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  color: #fd0d0d;
  border-color: #fd0d0d;                
}

button:hover {
  color: #fff;
  background-color: #fd0d0d;
}    
</style>
