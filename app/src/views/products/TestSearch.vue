<template>
  <div>
    <div class="form-row justify-content-center align-items-center mmt-5">
      <div class="col-md-4">
        <label class="sr-only" for="inlineFormInput">Query</label>
        <input v-model.lazy="keywords" type="text" class="customformdes form-control mb-2" id="inlineFormInput" placeholder="E.g. Larave, Vue, Design, Writer">
      </div>
      <div class="col-md-4">
        <label class="sr-only" for="inlineFormInputGroup">Area</label>
        <input v-model.lazy="area" type="text" class="customformdes form-control mb-2" id="inlineFormInputGroup" placeholder="E.g. Jabodetabek, Medan, Surabaya">
      </div>
      <div class="col-md-2">
        <button type="button" class="customformdes btn btn-block btn-primary mb-2"><i class="fab fa-searchengin"></i> Search</button>
      </div>
    </div>
    // currently this part shows the result as hidden drop-down
    <b-list-group v-if="results.length > 0">
      <b-list-group-item v-for="result in results" :key="result.id" :to="`/projects/${result.slug}`">{{result.title}}</b-list-group-item>
    </b-list-group>


  </div>
</template>

<script>
var _ = require('lodash');
import navbar from './navbar.vue';
export default {
  data() {
    return {
      keywords: null,
      area: null,
      results: []
    };
  },

    watch: {
      keywords: 'fetch',
      area: 'fetch'
    },

  methods: {
    fetch() {
      axios.get('/api/indexsearch', { params: { keywords: this.keywords, area: this.area } })
          .then(response => this.results = response.data)
          .catch(error => {});
    }
  }
}
</script>