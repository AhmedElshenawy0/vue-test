<template lang="">
  <div class="container mx-auto">
    <h3 class="text-start fs-5 mt-3">Contact Us</h3>
    <hr />
    <form action="/action_page.php">
      <div class="mb-3 mt-3">
        <label for="name" class="form-label">Name</label>
        <input
          type="text"
          class="form-control"
          id="email"
          placeholder="Enter your name"
          name="name"
        />
        <label for="email" class="form-label">Email</label>
        <input
          type="email"
          class="form-control"
          id="email"
          placeholder="Enter email"
          name="email"
        />
      </div>
      <div class="mb-3">
        <label for="pwd" class="form-label">Password</label>
        <input
          type="password"
          class="form-control"
          id="pwd"
          placeholder="Enter password"
          name="pswd"
        />
      </div>
      <div class="form-check mb-3">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox" name="remember" />
          Remember me
        </label>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>
<script lang="ts" setup></script>
<style lang=""></style>
