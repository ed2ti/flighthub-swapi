<template>
    <div class="people">
        <div class="row">
            <div class="col-sm-6">
                <h2>People <b>List</b></h2>
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
                    <th scope="col">Height</th>
                    <th scope="col">Mass</th>
                    <th scope="col">Hair Color</th>
                    <th scope="col">Skin Color</th>
                    <th scope="col">Eye Color</th>
                    <th scope="col">Birth Year</th>
                    <th scope="col">Gender</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="row in data" :key="row.name">
                    <td scope="col">{{ row.name }}</td>
                    <td scope="col">{{ row.height }}</td>
                    <td scope="col">{{ row.mass }}</td>
                    <td scope="col">{{ row.hair_color }}</td>
                    <td scope="col">{{ row.skin_color }}</td>
                    <td scope="col">{{ row.eye_color }}</td>
                    <td scope="col">{{ row.birth_year }}</td>
                    <td scope="col">{{ row.gender }}</td>
                </tr>
            </tbody>
        </table>
        <div class="btn-group" role="group">
            <button v-on:click="getPrevious()" type="button" class="btn btn-secondary">Previous</button>
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
            const response = await axios.get('https://swapi.dev/api/people/?page=' + page)
            if (response.status == 200) {
                this.data   = response.data.results;
                this.total  = response.data.count;
                this.pages  = Math.ceil(this.total / 10)
            }
        },
        async getSearch() {
            const search = this.$refs.my_search.value
            const response = await axios.get('https://swapi.dev/api/people/?search=' + search)
            if (response.status == 200) {
                this.data = response.data.results;
            }
        },
        getPrevious() {
            if (this.page > 1) {
                this.page--
                this.getPeople(this.page)
            }
        },
        getNext() {
            if (this.page < this.pages) {
                this.page++
                this.getPeople(this.page)
            }
        }
    }
}
</script>