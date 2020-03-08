<template>
    <div class="Ccharacters">
        <v-data-table
        :headers="headers"
        :items="desserts"
        hide-default-footer
        class="elevation-3"
    ></v-data-table>
    </div>
</template>

<script>
export default {
    name: 'CCharacters',
    data() {
        return {
            
            headers: [
                { text: 'Name',value: 'name' },
                { text: 'Ocupation', value: 'occupation' },
                { text: 'Fat (g)', value: 'fat' },
                { text: 'Carbs (g)', value: 'carbs' },
                { text: 'Protein (g)', value: 'protein' },
                { text: 'Iron (%)', value: 'iron' },
            ],
            desserts: [
                {
                    name: 'Frozen Yogurt',
                    calories: 159,
                    fat: 6.0,
                    carbs: 24,
                    protein: 4.0,
                    iron: '1%',
                },
                {
                    name: 'Ice cream sandwich',
                    calories: 237,
                    fat: 9.0,
                    carbs: 37,
                    protein: 4.3,
                    iron: '1%',
                },
            ]
        }
    }
}
</script>
