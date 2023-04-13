<template>
    <div class="people">
        <div class="row">
            <div class="col-sm-6">
                <h2>Starships <b>List</b></h2>
            </div>
            <div class="col-sm-6">
                <div class="search-box">
                    <div class="input-group">
                        <input type="text" ref="my_search" class="form-control" placeholder="Search by Name">
                        <button @click="getSearch()">Search</button>
                    </div>
                </div>
            </div>
        </div>

        <table class="table">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">model</th>
                    <th scope="col">MGLT</th>
                    <th scope="col">passengers</th>
                    <th scope="col">starship_class</th>
                    <th scope="col">hyperdrive_rating</th>
                </tr>
            </thead>
            <tbody>

                <tr v-for="row in data" :key="row.name">
                    <td scope="col">{{ row.name }}</td>
                    <td scope="col">{{ row.model }}</td>
                    <td scope="col">{{ row.MGLT }}</td>
                    <td scope="col">{{ row.passengers }}</td>
                    <td scope="col">{{ row.starship_class }}</td>
                    <td scope="col">{{ row.hyperdrive_rating }}</td>
                </tr>

            </tbody>
        </table>
        <div class="btn-group" role="group">
            <button v-on:click="getPrevious()"  type="button" class="btn btn-secondary">Previous</button>
            <button v-on:click="getNext()" type="button" class="btn btn-secondary">Next</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "listPeople",
    data() {
        return {
            data: [],
            total: 0,
            page: 1,
            pages: 0
        }
    },
    mounted() {
        this.getPeople(this.page)
    },
    methods: {
        async getPeople(page) {
            const response = await axios.get('https://swapi.dev/api/starships/?page='+page)
            if (response.status == 200) {

                this.data       = response.data.results;
                this.total      = response.data.count;
                this.pages      = Math.ceil(this.total / 10)
            }
        },
        async getSearch() {
            const search = this.$refs.my_search.value
            const response = await axios.get('https://swapi.dev/api/starships/?search='+search)
            if (response.status == 200) {
                this.data = response.data.results;
            }
        },
        getPrevious(){
            if (this.page>1){
                this.page--
                this.getPeople(this.page)
            }
        },
        getNext(){
            if (this.page<this.pages){
                this.page++
                this.getPeople(this.page)
            }
        }
        
    }
}
</script>