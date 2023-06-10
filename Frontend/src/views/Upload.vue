<template>
    <div class="text-white px-40">
        <div class="mb-5">
            <h4 class="mt-2 mb-4 text-xl font-medium ml-1">Details:</h4>
            <textarea maxlength="100" placeholder="Title" class="bg-almostBlack text-xs px-2 py-2 w-[98%] ml-1 h-20 border-2 border-white rounded-lg mb-2 resize-none overflow-y-auto"></textarea>
            <textarea maxlength="2000" placeholder="Description" class="bg-almostBlack text-xs px-2 py-2 w-[98%] ml-1 h-40 border-2 border-white rounded-lg mb-2 resize-none overflow-y-auto"></textarea>
        </div>
        <div class="flex gap-2">
            <h4 class="mt-2 mb-4 text-xl font-medium ml-1">Video:</h4>
            <input class="mt-2" type="file" accept="video/*">
        </div>
        <div class="flex gap-2">
            <h4 class="mt-2 mb-4 text-xl font-medium ml-1">Thumbnail:</h4>
            <input class="mt-2" type="file" accept="image/*">
        </div>
        <div class="flex gap-3">
            <h4 class="mt-2 mb-4 text-xl font-medium ml-1">Visibility:</h4>
            <div class="mt-3 text-[1rem] font-light">
                <input type="radio" name="visibility" id="public">
                <label for="public">Public</label>
            </div>
            <div class="mt-3 text-[1rem] font-light">
                <input type="radio" name="visibility" id="private">
                <label for="private">Private</label>
            </div>
        </div>
        <div class="flex justify-end gap-3 text-sm">
            <button class="py-2 px-3 bg-searchBarGray hover:bg-gray ease-in-out duration-300 rounded-2xl">Cancel</button>
            <button class="py-2 px-3 bg-highlightBlue hover:bg-[#478ac4] ease-in-out duration-300 rounded-2xl">Upload</button>
        </div>
    </div>
</template>

<script>

export default{
    name: 'Upload'
}

</script>