<script setup lang="ts">

</script>


<template>
    <el-card shadow="hover" class="card-quiz">
        <template #header>
            <h3>{{$t('CreateNewQuiz')}}</h3>
        </template>
        <div class="colums">
            <div class="column-one" >
                <slot name="first-column"></slot>
            </div>
            <div class="column-two" >
                <slot name="second-column"></slot>
            </div>
        </div>
    </el-card>
</template>

<style scoped>
.colums {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    width: 50vw;
}

.column-one {
    width: 30%;
}

.column-two {
    width: 66%
}

.card-quiz {
    max-height: 90vh;
    overflow-y: auto;
}

@media screen and (max-width: 1200px) {
    .colums {
        width: 100%;
        justify-content: center;
        align-items: center;
    }

    .column-one {
        width: 100%;
    }

    .column-two {
        width: 100%
    }
}
</style>

