import { createStore } from 'vuex'

export default createStore({
  state: {
    //被選中的數字
    chosenumber:[],
    //玩家人數
    players:2,
    //目前是哪位玩家的回合
    playerturn:0,
    //每位玩家完成計算後進入下一輪
    done:[false,false],
    //是否已經有人勝利
    end:false,
    //是否要進行初始化
    newgame:false,
    //未選的數字
    unchoosenumber:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]
  },
  mutations: {
    //初始化玩家人數
    renewplayersnumber(state,newplayers){
      state.players=newplayers;
    },
    //初始化done
    renewdone(state,newplayers){
      state.done=[];
      for(var i=0;i<newplayers;i++){
        state.done[i]=false;
      }
    },
    //初始化被選中的數字
    renewchosenumber(state){
      state.chosenumber=[];
    },
    //初始化目前局數
    renewplayerturn(state){
      state.playerturn=0;
    },
    //初始化勝利
    renewend(state){
      state.end=false;
    },
    //初始化未選按鈕
    renewunchoosenumber(state){
      state.unchoosenumber=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
    },
    renewgame(state,item){
      state.newgame=item;
    },
    //重置done
    redone(state){
      for(var i=0;i<state.done.length;i++){
        state.done[i]=false;
      }
    },
    //新增被選中的數字，並從未選扣除
    addnumber(state,newnumber){    //
      state.chosenumber.push(newnumber);
      state.unchoosenumber.splice(state.unchoosenumber.indexOf(newnumber),1);
    },
    //回傳玩家已完成步驟
    idown(state,player){
      state.done[player-1]=true;
    },
    //目前局數
    goahead(state){
      state.playerturn++;
    }
  },
  getters: {
    //判斷是否大家都完成
    isdone(state){
      for(var i=0;i<state.done.length;i++){
        if(!state.done[i]){
          return false;
        }
      }
      return true;
    }
  },
  actions: {
  },
  modules: {
  }
})
