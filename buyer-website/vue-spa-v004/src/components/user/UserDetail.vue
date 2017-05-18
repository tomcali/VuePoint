<template>
    <div>
        <h3>Product or service details . . .</h3>
        <p>Product or service ID: {{ $route.params.id }}</p>
        <router-link
                tag="button"
                :to="link"
                class="btn btn-primary">User Request
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
                    query: {
                        locale: 'locale-value',
                        q: 'q-value'
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