<template>
    <main>
        <form-main action="/" method="post" :done="FormDone" :fail="FormFail">
            <form-group name="key" :value="key" type="hidden"></form-group>
            <form-group name="name" :value="name" label="Name"></form-group>
            <form-group name="year" :value="year" type="select" :options="yearsRows" label="Year"></form-group>
            <form-group name="birthday" :value="birthday" type="date" label="Birthday"></form-group>
            <form-group name="desc" :value="desc" type="textarea" label="Description"></form-group>
            <form-submit text="Send Fail"></form-submit>
        </form-main>
    </main>
</template>
<script>
    export default {
        data(){
            return {
                key:'safqrli193201i3fkwmvasdf',
                name: 'Boris',
                year: '1990',
                birthday: '1990-12-12',
                desc: 'My name is boris',
                yearsRows: [
                    {id:'1990', text:'1990'},
                    {id:'1991', text:'1991'},
                    {id:'1992', text:'1992'},
                    {id:'1993', text:'1993'},
                    {id:'1994', text:'1994'},
                    {id:'1995', text:'1995'},
                    {id:'1996', text:'1996'},
                ]
            }
        },
        methods:{
            FormDone(response){
                console.log(response);
                alert(response.message);
            },
            FormFail(response){
                console.error(response);
                alert(response.message);
            }
        }
    }
</script>
<style>
    main {
        width: 940px;
        max-width:100%;
        margin: 0 auto;
    }
</style>