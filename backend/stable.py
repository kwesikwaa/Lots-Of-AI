from diffusers import StableDiffusionPipeline,DPMSolverMultistepScheduler
# from diffusers.utils import 
import torch

model = ["stabilityai/stable-diffusion-2-1","stabilityai/stable-diffusion-xl-base-1.0"]

prompt = "adorable baby boss wearing dark glasses and suit, standing in the middle of cyberpunk steet, depth of field, focus on baby boss, ,cold and warm constrast color palette,detailed,2k"

pipe = StableDiffusionPipeline.from_pretrained(
    model[1],
    torch_dtype = torch.float16,  
    ).to("cuda")

# pipe.scheduler = DPMSolverMultistepScheduler.from_config(pipe.scheduler.config)
pipe = pipe.to("cuda")

image = pipe(prompt).images[0]    
image.save("prompt.png")


# skips = [None, 1,2,3,4]
# final_images = []

# for clip_skip in skips:
#     generator = torch.manual_seed(245)
#     image = pipe(
#         prompt,
#         generator=generator,
#         num_inference_steps=25,
#         clip_skip=clip_skip
#     ).images[0]
#     final_images.append(image)

# make_image_grid(final_images,1,len(final_images)).save("results.jpg")




# personal test... generative arts ai with locally deployed stablediffusion



from diffusers import StableDiffusionPipeline, DPMSolverMultistepScheduler
import torch

prompt =input(" ")
model_id = "stabilityai/stable-diffusion-2-1"

# Use the DPMSolverMultistepScheduler (DPM-Solver++) scheduler here instead
pipe = StableDiffusionPipeline.from_pretrained(model_id, torch_dtype=torch.float16)
pipe.scheduler = DPMSolverMultistepScheduler.from_config(pipe.scheduler.config)
pipe = pipe.to("cuda")


image = pipe(prompt).images[0]
    
image.save("prompt.png")

