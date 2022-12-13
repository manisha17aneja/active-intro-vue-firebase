// Create.vue

<template>
  <div class="container">
        <div class="card">
            <div class="card-header">
                <h3>Add Item</h3>
            </div>
            <div class="card-body">
                <form v-on:submit.prevent="submit">
                    <div class="form-group">
                        <label>Item Name:</label>
                       
                        <input type="text" v-model.trim="$v.name.$model" :class="{'is-invalid': validationStatus($v.name)}" class="form-control form-control-lg">
                        <div v-if="!$v.name.required" class="invalid-feedback">The name field is required.</div>

                    </div>
                    <div class="form-group">
                        <label>Item Price:</label>
                        <input type="text" v-model.trim="$v.price.$model" :class="{'is-invalid': validationStatus($v.price)}" class="form-control form-control-lg">
                <div v-if="!$v.price.required" class="invalid-feedback">The price field is required.</div>
                <div v-if="!$v.price.minLength" class="invalid-feedback">You must have at least {{ $v.price.$params.minLength.min }} letters.</div>
                <div v-if="!$v.price.maxLength" class="invalid-feedback">You must not have greater then {{ $v.price.$params.maxLength.min }} letters.</div>
            
                    </div>
                    <div class="form-group">
                        <input type="submit" class="btn btn-primary" value="Add Item"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>


<script>


import { required, minLength, maxLength } from 'vuelidate/lib/validators'
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { db } from '../../main'

Vue.use(VueAxios,axios)

export default {
    name: 'Create',
    data: function() {
        return {
            name: '', 
            price: ''
        }
    }, 
    validations: {
        name: {required},
        price: {required, minLength: minLength(3), maxLength: maxLength(8)}
    },

    methods: {

        validationStatus: function(validation) {
            return typeof validation != "undefined" ? validation.$error : false;
        },

        submit: function() {

            this.$v.$touch();
            if (this.$v.$pendding || this.$v.$error) return;

            db.collection("items")
            .add({ name: this.name, price: this.price })
            .then(() => {
                console.log("Added Successfully!");
                this.$toasted.success('Success, Added Successfully!', {
                   icon : 'check',
                    //icon : 'error_outline'
                })
                this.$router.push('/items/index');
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            }); 

        }
    }
}
</script>


