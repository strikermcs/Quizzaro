import{u as l,ae as o,af as I,ag as u,av as z,aw as Q,aj as r,ax as f,ay as p,ah as i}from"./index-Cmehh-cC.js";class h{static async getQuizesTable(s){var c;const t=(c=l().user)==null?void 0:c.uid,a=[],n=o(u(i,"sendQuizes"),I(s,"==",t));return(await z(n)).forEach(q=>{a.push({id:q.id,...q.data()})}),a}static async addQuiz(s){return(await Q(u(i,"quizes"),s)).id}static async getQuizzesByUser(s){const e=[],t=o(u(i,"quizes"),I("userId","==",s));return(await z(t)).forEach(n=>{e.push({id:n.id,...n.data()})}),e}static async getQuizById(s){const e=r(i,"quizes",s);return(await f(e)).data()}static async deleteQuizById(s){const e=r(i,"quizes",s);await p(e)}static async sendQuizToUser(s,e){var d,c;const t=l(),a={quizId:e.id,senderId:(d=t.user)==null?void 0:d.uid,senderName:(c=t.user)==null?void 0:c.displayName,recipientId:s.userId,recipientName:s.username};return(await Q(u(i,"sendQuizes"),a)).id}static async getSentQuizes(){const s=[],e=await this.getQuizesTable("senderId");for await(const t of e){const a=r(i,"quizes",t.quizId),n=await f(a);s.push({quiz:n.data(),recipientName:t.recipientName,recipientId:t.recipientId,sentQuizId:t.id})}return s}static async sentQuizDelete(s){const e=r(i,"sendQuizes",s);await p(e)}static async getIncomeQuizes(){const s=[],e=await this.getQuizesTable("recipientId");for await(const t of e){const a=r(i,"quizes",t.quizId),n=await f(a);s.push({quiz:n.data(),senderName:t.senderName,senderId:t.senderId,sentQuizId:t.id})}return s}static async getAllQuizes(){const s=[],e=o(u(i,"quizes"));return(await z(e)).forEach(a=>{s.push({id:a.id,...a.data()})}),s}static async sentResultQuizToUser(s){return(await Q(u(i,"quizesResults"),s)).id}}export{h as q};
