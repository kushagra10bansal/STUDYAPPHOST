// Import necessary modules
const Section = require("../models/Section")
const Subsection = require("../models/Subsection")
const SubSection = require("../models/Subsection")
const { uploadImageToCloudinary } = require("../utils/imageUploader")



// Create a new sub-section for a given section
exports.createSubSection = async (req, res) => {

  // 1. fetch info. video alag se fetch
  // 2. validate the data
  // 3. upload the video to cloudinary 
  // 4. create a new Subsection 
  // 5. update the section with the subsection id
  // 6. return response


  try {
    // Extract necessary information from the request body
    const { sectionId, title, description } = req.body
    const video = req.files.video

    // Check if all necessary fields are provided
    if (!sectionId || !title || !description || !video) {
      return res
        .status(404)
        .json({ success: false, message: "All Fields are Required" })
    }
    console.log(video)

    // Upload the video file to Cloudinary
    const uploadDetails = await uploadImageToCloudinary(
      video, //kis file ko upload karna hai
      process.env.FOLDER_NAME //kis folder mein upload karna hai
    )
    console.log(uploadDetails)

    // Create a new sub-section with the necessary information
    const SubSectionDetails = await SubSection.create({
      title: title,
      timeDuration: `${uploadDetails.duration}`,
      description: description,
      videoUrl: uploadDetails.secure_url,
    })

    // Update the corresponding section with the newly created sub-section
    const updatedSection = await Section.findByIdAndUpdate(
      { _id: sectionId },
      { $push: { subSection: SubSectionDetails._id } }, //array mein subsection ki id add kar rahe hai
      { new: true }
    ).populate("subSection")

    // Return the updated section in the response
    return res.status(200).json({ success: true, data: updatedSection })
  } catch (error) {
    // Handle any errors that may occur during the process
    console.error("Error creating new sub-section:", error)
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    })
  }
}

exports.updateSubSection = async (req, res) => {
  try {
    const { sectionId, subSectionId, title, description } = req.body
    const subSection = await SubSection.findById(subSectionId)

    if (!subSection) {
      return res.status(404).json({
        success: false,
        message: "SubSection not found",
      })
    }

    if (title !== undefined) {
      subSection.title = title
    }

    if (description !== undefined) {
      subSection.description = description
    }
    if (req.files && req.files.video !== undefined) {
      const video = req.files.video
      const uploadDetails = await uploadImageToCloudinary(
        video,
        process.env.FOLDER_NAME
      )
      subSection.videoUrl = uploadDetails.secure_url
      subSection.timeDuration = `${uploadDetails.duration}`
    }

    await subSection.save()

    // find updated section and return it
    const updatedSection = await Section.findById(sectionId).populate(
      "subSection"
    )

    console.log("updated section", updatedSection)

    return res.json({
      success: true,
      message: "Section updated successfully",
      data: updatedSection,
    })
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      success: false,
      message: "An error occurred while updating the section",
    })
  }
}

exports.deleteSubSection = async (req, res) => {
  try {

    // 1. fetch sectionid and subsectionid 
    // 2. find the instances of subsection in the section and delete it using pull. 
          //pull deletes the instances of the subsection id from the subsection array from the section
    // 3. delete the subsection 
    // 4. check if subsection has been deleted or not 
    // 5. create a response. populate the subsection . 

    const { subSectionId, sectionId } = req.body

    //section ke andar subsection array se subsection id delete ho jaygi using PULL
    await Section.findByIdAndUpdate(
      { _id: sectionId },
      {
        $pull: {
          subSection: subSectionId,
        },
      }
    )
    
    //delete the subsection
    const subSection = await SubSection.findByIdAndDelete({ _id: subSectionId })
    //check if the subseciton has been deleted or not
    if (!subSection) {
      return res
        .status(404)
        .json({ success: false, message: "SubSection not found" })
    }


    // find updated section and return it
    // here we are just making a response. populating the subsection with the subsection data wont be stored in the database
    const updatedSection = await Section.findById(sectionId).populate(
      "subSection"
    )

    return res.json({
      success: true,
      message: "SubSection deleted successfully",
      data: updatedSection,
    })
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      success: false,
      message: "An error occurred while deleting the SubSection",
    })
  }
}
