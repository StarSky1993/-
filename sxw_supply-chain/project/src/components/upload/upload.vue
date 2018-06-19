<template>
	<div class="upload" :style="size">
		<input type="file" accept="image/*" @change="onChange" />
		<img :src="cover_img+'?imageMogr2/auto-orient'" alt="" >
	</div>
</template>

<style scoped>
	.upload{
		width: 100%;
		height: 100%;
		background: url('../../components/upload/imgs/Upload_attachment.png') no-repeat;

		position: relative;
	}
	input {
		cursor: pointer;
		opacity: 0;
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0px;
		left: 0px;
		z-index: 2;
	}
	img {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0px;
		left: 0px;
		z-index: 1;
	}
</style>

<script>
	export default {
		name: 'upload',
		data() {
			return {

			}
		},
		props: {
			objInfo:{

			},
			cover_img:{
				type:String
			},
			size: {
				type: Object,
				default() {
					return {
						width: "120px",
						height: "120px"
					}
				}
			},
			type: {
				type: Array,
				default(){
					return ["jpeg","png","bmp"]
				}
			}
		},
		methods :{
			onChange(event) {
				if (event.target.files && event.target.files[0]) {
					let file = event.target.files[0]
					let reader = new FileReader()
					reader.addEventListener('load', e => {
						let result = e.target.result
						if (result.lastIndexOf('data:base64') != -1) {
                            result = result.replace('data:base64', 'data:image/jpeg;base64');
                        } else if (result.lastIndexOf('data:,') != -1) {
                            result = result.replace('data:,', 'data:image/jpeg;base64,');
                        }
						this.$emit('change', {
						size: file.size,
						type: file.type,
						name: file.name,
						base64: result
						},this.objInfo)
					})
					reader.readAsDataURL(file)
					}
    		}
		}
	}
</script>