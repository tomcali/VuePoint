<template>
    <div>
        <form>
            <fieldset>
                <legend>What is your request?</legend>
                <label>
                    <input type="checkbox" v-model="outputWork" value="gsca-book"/>
                    Order Getting Started with Conjoint Analysis (third edition)
                </label><br>
                <label>
                    <input type="checkbox" v-model="outputWork" value="wat-book"/>
                    Order Without a Tout: How to Pick a Winning Team
                </label><br>
                <label>
                    <input type="checkbox" v-model="outputWork" value="research-reports"/>
                    Research Reports and Case Studies
                </label><br>
                <label>
                    <input type="checkbox" v-model="outputWork" value="services"/>
                    Programming and Consulting Services
                </label><br>
            </fieldset>
        </form>
        <br>
        <router-link
                tag="button"
                :to="link"
                class="btn btn-primary">Submit Request
        </router-link>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                link: {
                    name: 'userRequest',
                    params: {
                        id: this.$route.params.id
                    },
                    hash: '#data'
                }
            }
        },
        beforeRouteEnter(to, from, next) {
            if (true) {
                next();
            } else {
                next(false);
            }
        }
    }
</script>