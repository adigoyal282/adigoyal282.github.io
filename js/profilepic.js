var app = new Vue({
    el: '#app1',
    data:{
        jsonData: "",
        username :"",
        followers:0,
        following:0,
        name:"",
        imageLink:"https://pluspng.com/img-png/instagram-png-instagram-png-logo-1455.png",
        urlString:"",
        success:false,
        notSuccess:true,
        id:0,

    },
    methods:{
        print:async function(){
            let resp = await this.getData();
            this.jsonData = resp.request.response;
            this.jsonData = JSON.parse(this.jsonData);
            this.success = true;
            this.notSuccess = false,
            this.name = this.jsonData.graphql.user.full_name;
            this.followers = this.jsonData.graphql.user.edge_followed_by.count;
            this.following = this.jsonData.graphql.user.edge_follow.count;
            this.imageLink = this.jsonData.graphql.user.profile_pic_url_hd;
            this.id = this.jsonData.graphql.user.id;
        
        },

        getData: function(){
            return axios.get(this.urlString);
         },

        generateLink: function(x){
            this.urlString = 'https://instagram.com/'+this.username+'/?__a=1'
            console.log(this.urlString)
            this.success = false;
            this.notSuccess = true;
            if(x==0)
            {
                this.print();
            }
            else if(x==1)
            {
                this.print2();
            }

        },


    },
});



//https://www.instagram.com/graphql/query/?query_hash=d04b0a864b4b54837c0d870b0e77e076&variables=%7B%22id%22%3A%222194532762%22%2C%22include_reel%22%3Atrue%2C%22fetch_mutual%22%3Afalse%2C%22first%22%3A12%2C%22after%22%3A%22QVFEUUE5TG1QeGphd2plS0I3aHctQ1ZPc1FRNzBySGN5bHZZZTN4X3IyTUxFTVozY1JrVF94R1BxRXh6c0NBamppdnFiTHgxQlFSZW51SkRuM2pXSUp0Ng%3D%3D%22%7D