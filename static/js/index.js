document.addEventListener("DOMContentLoaded", function () {
  const contentGroups = {
    "DatasetExamples": ["example1", "example2", "example3"],
    "CaseStudy": ["qa", "tag", "reasoning"]
  };

  Object.entries(contentGroups).forEach(([sectionId, contentIds]) => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    const buttons = section.querySelectorAll(".toggle-button");
    const blocks = contentIds.map(id => document.getElementById(id));

    // Show the first block and highlight its button
    const defaultId = contentIds[0];
    const defaultBlock = document.getElementById(defaultId);
    const defaultBtn = [...buttons].find(b => b.getAttribute("data-target") === defaultId);
    if (defaultBlock && defaultBtn) {
      defaultBlock.classList.remove("is-hidden");
      defaultBtn.classList.add("is-active");
      defaultBtn.classList.remove("is-light");
    }

    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        const targetId = btn.getAttribute("data-target");
        const targetBlock = document.getElementById(targetId);
        const isCurrentlyVisible = !targetBlock.classList.contains("is-hidden");

        // Hide all blocks and reset button styles
        blocks.forEach(block => block.classList.add("is-hidden"));
        buttons.forEach(b => {
          b.classList.remove("is-active");
          b.classList.add("is-light");
        });

        // If it was hidden, show and highlight it
        if (!isCurrentlyVisible) {
          targetBlock.classList.remove("is-hidden");
          btn.classList.add("is-active");
          btn.classList.remove("is-light");
        }
      });
    });
  });
});
