class UserAccount {
  #usage;
  #limits;

  constructor() {
    this.#usage = new Map();
    this.#limits = new Map([
      ["download", 1],
      ["upload", 2],
      ["share", 0]
    ]);
  }

  canUse(feature) {
    const limit = this.#limits.get(feature);
    if (limit === undefined) return false;

    const used = this.#usage.get(feature) || 0;
    return used < limit;
  }

  useFeature(feature) {
    if (!this.canUse(feature)) {
      console.log("Feature blocked");
      return;
    }

    const used = this.#usage.get(feature) || 0;
    this.#usage.set(feature, used + 1);
    this.onUse(feature);
  }

  onUse(feature) {
    console.log(`Used feature: ${feature}`);
  }

  getUsage(feature) {
    return this.#usage.get(feature) || 0;
  }
}

// Child Classes :

class FreeUser extends UserAccount {
  onUse(feature) {
    console.log(`Free user used ${feature}`);
  }
}

class PremiumUser extends UserAccount {
  onUse(feature) {
    console.log(`Premium access granted for ${feature}`);
  }
}

class EnterpriseUser extends UserAccount {
  canUse(feature) {
    return true; // overrides limits
  }

  onUse(feature) {
    console.log(`Enterprise unlimited use: ${feature}`);
  }
}

// Create Users :

const free = new FreeUser();
const premium = new PremiumUser();
const enterprise = new EnterpriseUser();

// Test :

free.useFeature("download");
free.useFeature("download");

premium.useFeature("upload");
premium.useFeature("upload");
premium.useFeature("upload");

enterprise.useFeature("share");

enterprise.useFeature("share");
