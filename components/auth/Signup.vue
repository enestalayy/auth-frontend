<template>
  <div
    class="flex flex-col justify-center font-[sans-serif] p-4"
    style="
      background-image: url('/pxfuel.jpg');
      background-repeat: no-repeat;
      background-size: cover;
    "
  >
    <div
      class="bg-opacity-70 bg-white max-w-md w-full mx-auto shadow-[0_2px_10px_-2px_rgba(195,169,50,0.5)] p-8 relative mt-12"
    >
      <div
        class="bg-white w-24 h-24 border-[10px] p-1.5 absolute left-0 right-0 mx-auto -top-12 rounded-full overflow-hidden"
      >
        <a href="javascript:void(0)"
          ><img
            src="https://readymadeui.com/readymadeui-short.svg"
            alt="logo"
            class="w-full inline-block"
          />
        </a>
      </div>

      <form @submit.prevent="handleLogin" class="mt-12">
        <h3 class="text-xl font-bold text-blue-600 mb-8 text-center">
          Create free account
        </h3>
        <div class="space-y-4">
          <div class="flex gap-2">
            <input
              name="first_name"
              v-model="first_name"
              type="text"
              required
              class="bg-transparent w-full text-sm text-gray-800 border-b border-gray-400 focus:border-gray-800 px-2 py-3 outline-none placeholder:text-gray-800"
              placeholder="Enter name"
            />
            <input
              name="last_name"
              v-model="last_name"
              type="text"
              required
              class="bg-transparent w-full text-sm text-gray-800 border-b border-gray-400 focus:border-gray-800 px-2 py-3 outline-none placeholder:text-gray-800"
              placeholder="Enter surname"
            />
          </div>
          <input
            name="email"
            v-model="email"
            type="text"
            required
            class="bg-transparent w-full text-sm text-gray-800 border-b border-gray-400 focus:border-gray-800 px-2 py-3 outline-none placeholder:text-gray-800"
            placeholder="Enter email"
          />
          <!-- PASSWORD START -->
          <!-- <input
            name="password"
            v-model="password"
            type="password"
            required
            class="bg-transparent w-full text-sm text-gray-800 border-b border-gray-400 focus:border-gray-800 px-2 py-3 outline-none placeholder:text-gray-800"
            autocomplete="confirm-password"
            placeholder="Enter password"
          /> -->
          <!-- Strong Password -->
          <input
            type="password"
            v-model="password"
            @input="checkPasswordStrength"
            @blur="() => (hintsVisible = false)"
            placeholder="Enter password"
            class="relative bg-transparent w-full text-sm text-gray-800 border-b border-gray-400 focus:border-gray-800 px-2 py-3 outline-none placeholder:text-gray-800"
          />
          <div
            v-if="hintsVisible"
            class="absolute left-0 mt-2 w-full bg-white shadow-lg rounded-lg p-4 opacity-0 scale-95 transition-all duration-300 ease-out"
            :class="{ 'opacity-100 scale-100': hintsVisible }"
          >
            <h4>Your password must contain:</h4>
            <ul>
              <li v-for="hint in hints">
                {{ console.log(hint) }}
                <span v-if="hint.value">
                  <svg
                    class="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <span v-else>
                  <svg
                    class="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                  </svg>
                </span>
                {{ hint.text }}
              </li>
              <!-- <li :class="{ valid: rules.minLength }">Minimum 6 characters</li>
              <li :class="{ valid: rules.lowercase }">Lowercase letters</li>
              <li :class="{ valid: rules.uppercase }">Uppercase letters</li>
              <li :class="{ valid: rules.numbers }">Numbers</li>
              <li :class="{ valid: rules.specialChars }">Special characters</li> -->
            </ul>
          </div>
          <!-- End Strong Password -->
          <!-- PASSWORD END -->
          <input
            name="confirm_password"
            v-model="confirm_password"
            type="password"
            required
            class="bg-transparent w-full text-sm text-gray-800 border-b border-gray-400 focus:border-gray-800 px-2 py-3 outline-none placeholder:text-gray-800"
            autocomplete="confirm-password"
            placeholder="Enter confirm password"
          />
          <div class="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              class="h-4 w-4 shrink-0 border-gray-300 rounded"
            />
            <label for="remember-me" class="ml-3 block text-sm text-gray-800">
              I accept the
              <a
                href="javascript:void(0);"
                class="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap"
                >Terms and Conditions</a
              >
            </label>
          </div>
        </div>

        <div class="mt-8">
          <button
            type="submit"
            class="w-full py-4 px-8 text-sm tracking-wide rounded-full font-semibold text-white bg-gray-800 hover:bg-[#222] focus:outline-none"
          >
            Create an account
          </button>
        </div>
        <p class="text-sm mt-8 text-center text-gray-800">
          Already have an account?
          <a
            href="/auth"
            class="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap"
            >Login here</a
          >
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import toast from "@/utils/toast";

import { mapActions, mapState } from "pinia";
export default {
  data() {
    return {
      first_name: "Enes",
      last_name: "Talay",
      email: "enestalayy@gmail.com",
      password: "Yvz1995&&&",
      confirm_password: "Yvz1995&&&",
      hintsVisible: false,
      hints: {
        minLength: {
          text: "Minimum 6 characters",
          value: false,
        },
        lowercase: {
          text: "Lowercase letters",
          value: false,
        },
        uppercase: {
          text: "Uppercase letters",
          value: false,
        },
        numbers: {
          text: "Numbers",
          value: false,
        },
        specialChars: {
          text: "Special characters",
          value: false,
        },
      },
    };
  },
  methods: {
    ...mapActions(useAuthStore, ["signup"]),
    checkPasswordStrength() {
      this.hintsVisible = !!this.password;
      this.hints.minLength = this.password.length >= 6;
      this.hints.lowercase = /[a-z]/.test(this.password);
      this.hints.uppercase = /[A-Z]/.test(this.password);
      this.hints.numbers = /\d/.test(this.password);
      this.hints.specialChars = /[!@#$%^&*(),.?":{}|<>]/.test(this.password);
    },
    async handleLogin() {
      if (this.password !== this.confirm_password) {
        return;
      }
      const userData = {
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        password: this.password,
      };
      const { data, error } = await this.signup(userData);
      if (!error.value) {
        toast.addToast("Verification Email is Sent. Please Verify Your Email", {
          type: "info",
        });
      }
    },
  },
};
</script>

<style scoped>
.strong-password {
  max-width: 400px;
  margin: 0 auto;
}

.password-input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
  outline: none;
}

.password-input:focus {
  border-color: #007bff;
}

.password-hints {
  background-color: #f9f9f9;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
}

.password-hints h4 {
  margin-bottom: 10px;
  font-size: 16px;
}

.password-hints ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.password-hints li {
  margin: 5px 0;
  color: #ff0000;
}

.password-hints li.valid {
  color: #28a745;
}
</style>
