<template>
  <div class="autocomplete">
    <div class="input form-control mb-2" type="text" placeholder="By Address" @click="toggleVisible" v-text="selectedItem ? selectedItem[filterby] : ''"></div>
    <div class="placeholder" v-if="selectedItem == null" v-text="title"></div>
    <button class="close" @click="selectedItem = null" v-if="selectedItem">x</button>
    <div class="popover" v-show="visible">
      <input type="text"
        ref="input"
        v-model="query"
        @keydown.up="up"
        @keydown.down="down"
        @keydown.enter="selectItem"
        placeholder="Start Typing...">
      <div class="options" ref="optionsList">
        <ul>
          <li v-for="(match, index) in matches"
            :key="index"
            :class="{ 'selected': (selected == index)}"
            @click="itemClicked(index)"
            v-text="match[filterby]"></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

  

  export default {
    props: {
      items: {
        default() {
            return []
        },
        type: Array
      },
      filterby: {
        type: String
      },
      title: {
        default: 'By Address',
        type: String
      },
      shouldReset: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        itemHeight: 39,
        selectedItem: null,
        selected: 0,
        query: '',
        visible: false,
      };
    },
    methods: {
      toggleVisible() {
        this.visible = !this.visible;

        setTimeout(() => {
          this.$refs.input.focus();
        }, 50);
      },
      itemClicked(index) {
        this.selected = index;
        this.selectItem();
      },
      selectItem() {
        if (!this.matches.length) {
          return;
        }

        this.selectedItem = this.matches[this.selected];
        this.visible = false;

        if (this.shouldReset) {
          this.query = '';
          this.selected = 0;
        }

        this.$emit('selected', JSON.parse(JSON.stringify(this.selectedItem)));
      },
      up() {
        if (this.selected == 0) {
          return;
        }

        this.selected -= 1;
        this.scrollToItem();
      },
      down() {
        if (this.selected >= this.matches.length - 1) {
          return;
        }

        this.selected += 1;
        this.scrollToItem();
      },
      scrollToItem() {
        this.$refs.optionsList.scrollTop = this.selected * this.itemHeight;
      }
    },
    computed: {
      matches() {
        this.$emit('change', this.query);

        console.log(`This query: ${this.query}`)
        if (this.query == '') {
          return [];
        }
        //Forces the user to type in 7 characters first
        if (this.query.length > 7) {
          return this.items.filter((item) => item[this.filterby].toLowerCase().includes(this.query.toLowerCase()));
        } else {
          return [];
        }

        
      }
    }
  }
</script>

<style scoped>
.autocomplete {
    width: 100%;
    position: relative;
}
.input {
    height: 40px;
    /* border-radius: 3px;
    border: 2px solid lightgray; */
    box-shadow: 0 0 10px #eceaea;
    font-size: 18px;
    /* padding-left: 10px; */
    /* padding-top: 10px; */
    cursor: text;
}
.close {
    position: absolute;
    right: 20px;
    top: 4px;
    background: none;
    border: none;
    /* font-size: 30px; */
    color: rgb(90, 90, 90);
    cursor: pointer;
}
.placeholder {
    position: absolute;
    top: 8px;
    left: 13px;
    font-size: 17px;
    color: #797979; 
    pointer-events: none; 
}
.popover {
    min-height: 30vh;
    min-width: 90vh;
    border: 2px solid lightgray;
    position: absolute;
    top: 46px;
    left: 0;
    right: 0;
    background: #fff;
    border-radius: 3px;
    text-align: center;
}
.popover input {
    width: 95%;
    margin-top: 5px;
    height: 40px;
    font-size: 17px;
    border-radius: 3px;
    border: 1px solid lightgray;
    padding-top: 0px;
    padding-bottom: 0px;
}
.options {
    max-height: 150px;
    overflow-y: scroll;
    margin-top: 5px;
}
.options ul {
    list-style-type: none;
    text-align: left;
    padding-left: 0;
}
.options ul li {
    border-bottom: 1px solid lightgray;
    padding: 10px;
    cursor: pointer;
    background: #f1f1f1;
}
.options ul li:first-child {
    border-top: 2px solid #d6d6d6;
}

.options ul li:not(.selected):hover {
    background: #8c8c8c;
    color: #fff;
}
.options ul li.selected {
    background: rgb(255, 0, 191);
    color: #fff;
    font-weight: 600;
}
</style>

